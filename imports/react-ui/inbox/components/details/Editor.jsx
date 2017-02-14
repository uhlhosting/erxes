/* eslint-disable no-underscore-dangle */

import { _ } from 'meteor/underscore';
import React, { PropTypes } from 'react';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import { fromJS } from 'immutable';
import {
  EditorState,
  ContentState,
  getDefaultKeyBinding,
} from 'draft-js';
import {
  ErxesEditor,
  toHTML,
  createStateFromHTML,
} from '/imports/react-ui/common/Editor.jsx';

const extractEntries = (mention) => {
  const entries = mention._root.entries;
  const keys = _.map(entries, entry => entry[0]);
  const values = _.map(entries, entry => entry[1]);

  return _.object(keys, values);
};

const mentionPlugin = createMentionPlugin({
  mentionPrefix: '@',
});

const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];

export default class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
      collectedMentions: [],
      suggestions: this.props.mentions,
    };

    this.onChange = this.onChange.bind(this);
    this.keyBindingFn = this.keyBindingFn.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onAddMention = this.onAddMention.bind(this);
    this.getContent = this.getContent.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.responseTemplate !== this.props.responseTemplate) {
      // set editor state from response template
      this.setState({
        editorState: createStateFromHTML(
          this.state.editorState,
          nextProps.responseTemplate,
        ),
      });
    }
  }

  onChange(editorState) {
    this.setState({ editorState });

    this.props.onChange(this.getContent(editorState));
  }

  onSearchChange({ value }) {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, this.props.mentions),
    });
  }

  onAddMention(object) {
    const mention = extractEntries(object);

    const collectedMentions = this.state.collectedMentions;

    collectedMentions.push(mention);

    this.setState({ collectedMentions });

    // send mentioned user to parent
    this.props.onAddMention(_.pluck(collectedMentions, '_id'));
  }

  getContent(editorState) {
    let content = toHTML(editorState);

    // replace mention content
    _.each(this.state.collectedMentions, (m) => {
      content = content.replace(
        `@${m.name}`,
        `<span data-user-id='${m._id}' class='mentioned-person'>@${m.fullName}</span>`,
      );
    });

    return content;
  }

  keyBindingFn(e) {
    // handle shift + enter in editor
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      // call parent's method to save content
      this.props.onShifEnter();

      // clear content
      const state = this.state.editorState;
      const editorState = EditorState.push(state, ContentState.createFromText(''));
      this.setState({ editorState });

      return null;
    }

    return getDefaultKeyBinding(e);
  }

  render() {
    const pluginContent = (
      <MentionSuggestions
        onSearchChange={this.onSearchChange}
        suggestions={this.props.showMentions ? this.state.suggestions : fromJS([])}
        onAddMention={this.onAddMention}
        onChange={this.onChange}
      />
    );

    const props = {
      ...this.props,
      editorState: this.state.editorState,
      onChange: this.onChange,
      keyBindingFn: this.keyBindingFn,
      plugins,
      pluginContent,
    };

    return <ErxesEditor {...props} />;
  }
}

Editor.propTypes = {
  onChange: PropTypes.func,
  onAddMention: PropTypes.func,
  onShifEnter: PropTypes.func,
  showMentions: PropTypes.bool,
  responseTemplate: PropTypes.string,
  mentions: PropTypes.object, // eslint-disable-line
};

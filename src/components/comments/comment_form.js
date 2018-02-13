
// NOT A COMPONENT ANYMORE

import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createComment } from "../../actions";

class CommentNew extends Component {
  constructor(props) {
    super(props);
  }

  renderField(field) {
    const {
      meta: {
        touched,
        error
      }
    } = field;

    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={ className }>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input}/>
        <div className="text-help">
          { touched ? error : "" }
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createComment(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="feed_form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Your comment :" name={this.props.feed._id} component={this.renderField}/>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>);
  }
}

function validate(values) {
  const errors = {};
  if (!values.content) {
    errors.content = "Enter some content please";
  }
  return errors;
}

export default reduxForm({validate, form: "CommentNew"})(connect(null, {createComment})(CommentNew));

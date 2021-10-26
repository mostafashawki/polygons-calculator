import { IFormProps } from "../interfaces";
export const Form: React.FunctionComponent<IFormProps> = (props) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <small>Add your annotation JSON file</small>
      <input {...props.register("file", { required: true })} type="file" />

      <button>Upload</button>
    </form>
  );
};

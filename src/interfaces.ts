import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'

export interface IPolygonsResult {
    id:number;
    area: number;
    author: string;
    category: string;
  }
  
  export interface IFormFields {
    file:FileList
  }
  
  export interface IFormProps {
    onSubmit:   (data: IFormFields) => Promise<void>;
    handleSubmit: UseFormHandleSubmit<IFormFields>;
    register: UseFormRegister<IFormFields>;
  }
export interface BilleteraI {
  _id?: string;
  tag?: string;
  tipo: number;
  detalle: string;
  dir: string;
  costo: string;
  minimo: string;
  alias: string;
  sigla: string;
  maxRetiroB: string;
  maxRetiroP: string;
  maxRetiroO: string;
  maxRetiroD: string;
  estado: string;
  createdAt?: string
  updatedAt?: string
}

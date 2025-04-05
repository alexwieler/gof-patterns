export interface PatronGoF {
    id: string;
    nombre: string;
    categoria: 'Creacional' | 'Estructural' | 'Comportamiento';
    intencion: string;
    aplicabilidad: string;
    descripcion: string;
    motivacion: string;
    umlGofUrl: string;
    imagenGofUrl: string;
    ejemploLibro: {
      descripcion: string;
      githubUrl: string;
      zipPath: string;
    };
    ejemploExtra: {
      titulo: string;
      descripcion: string;
      umlEjemploUrl?: string;
      fragmentosCodigo?: string[];
    };
    ejercicio: {
      enunciado: string;
      codigoBase: string;
      patronesRelacionados?: string[];
    };
    notasDocente?: string[];
}
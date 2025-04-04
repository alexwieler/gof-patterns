export interface PatronGoF {
    id: string;
    nombre: string;
    categoria: 'Creacional' | 'Estructural' | 'Comportamiento';
    intencion: string;
    aplicabilidad: string;
    descripcion: string;
    umlImagen: string;
    ejemploLibro: {
      descripcion: string;
      githubUrl: string;
      zipPath: string;
    };
    ejemploExtra: {
      titulo: string;
      descripcion: string;
      fragmentosCodigo?: string[];
    };
    ejercicio: {
      enunciado: string;
      patronesRelacionados?: string[];
    };
  }
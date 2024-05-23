export interface Producto {
    // Identificador único del producto
    _id: string;

    // Nombre del producto
    nombre: string;

    // Descripción del producto (Nota: hay un error tipográfico, debería ser "descripcion")
    descripccion: string;

    // Categorías a las que pertenece el producto, puede tener múltiples categorías
    categoria: Categoria[];

    // URLs de las imágenes del producto
    imageUrl: string[];

    // Precio de venta del producto
    precio_venta: number;

    // Precio regular del producto
    precio_regular: number;

    // Slug para URLs amigables (opcional)
    slug?: string;

    // Fecha de creación del producto
    fechacreacion: Date;

    // Fecha de última actualización del producto (opcional)
    update_at?: Date;
}

export enum Categoria {
    // Categoría para productos de hombres
    Hombres = "hombres",

    // Categoría para productos de mujeres
    Mujeres = "mujeres",

    // Categoría para ropa
    Ropa = "ropa",
}

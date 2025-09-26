import type { Schema, Struct } from '@strapi/strapi';

export interface LineFabricacionComponents extends Struct.ComponentSchema {
  collectionName: 'components_line_fabricacion_components';
  info: {
    description: 'L\u00EDneas de insumos por batch (BOM) para fabricaci\u00F3n';
    displayName: 'fabricacion-components';
  };
  attributes: {
    cantidad: Schema.Attribute.Decimal & Schema.Attribute.Required;
    ingredient: Schema.Attribute.Relation<
      'oneToOne',
      'api::ingrediente.ingrediente'
    > &
      Schema.Attribute.Required;
    mermaPct: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0>;
    nota: Schema.Attribute.Text;
    unidad: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LineLine extends Struct.ComponentSchema {
  collectionName: 'components_line_lines';
  info: {
    description: '';
    displayName: 'line';
  };
  attributes: {
    ingredientes: Schema.Attribute.Relation<
      'oneToMany',
      'api::ingrediente.ingrediente'
    >;
    qty: Schema.Attribute.Decimal;
    subtotal: Schema.Attribute.Decimal;
    unit: Schema.Attribute.Enumeration<
      ['kg', 'gr', 'unidad ', 'docena', 'litros ', 'planchas ', 'cajas ']
    >;
    unitPrice: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'line.fabricacion-components': LineFabricacionComponents;
      'line.line': LineLine;
    }
  }
}

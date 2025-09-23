import type { Schema, Struct } from '@strapi/strapi';

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
      'line.line': LineLine;
    }
  }
}

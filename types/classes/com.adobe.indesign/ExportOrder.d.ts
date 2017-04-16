/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ExportOrder extends Adobe.Csawlib.CSEnumBase {
			/**
			 * based on article defined in article panel.
			 * @type {Adobe.Indesign.ExportOrder}
			 * @readonly
			 */
			public static readonly ARTICLE_PANEL_ORDER: Adobe.Indesign.ExportOrder;
			/**
			 * Alias for ARTICLE_PANEL_ORDER. based on article defined in 
			 * article panel.
			 * @type {Adobe.Indesign.ExportOrder}
			 * @readonly
			 */
			public static readonly articlePanelOrder: Adobe.Indesign.ExportOrder;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * based on document layout.
			 * @type {Adobe.Indesign.ExportOrder}
			 * @readonly
			 */
			public static readonly LAYOUT_ORDER: Adobe.Indesign.ExportOrder;
			/**
			 * Alias for LAYOUT_ORDER. based on document layout.
			 * @type {Adobe.Indesign.ExportOrder}
			 * @readonly
			 */
			public static readonly layoutOrder: Adobe.Indesign.ExportOrder;
			/**
			 * based on XML structure.
			 * @type {Adobe.Indesign.ExportOrder}
			 * @readonly
			 */
			public static readonly XML_STRUCTURE_ORDER: Adobe.Indesign.ExportOrder;
			/**
			 * Alias for XML_STRUCTURE_ORDER. based on XML structure.
			 * @type {Adobe.Indesign.ExportOrder}
			 * @readonly
			 */
			public static readonly xmlStructureOrder: Adobe.Indesign.ExportOrder;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
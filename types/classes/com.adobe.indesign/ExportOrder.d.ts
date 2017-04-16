/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ExportOrder extends Adobe.Csawlib.CSEnumBase {
			/** based on article defined in article panel. */
			public static readonly ARTICLE_PANEL_ORDER: Adobe.Indesign.ExportOrder;
			/**
			 * Alias for ARTICLE_PANEL_ORDER. based on article defined in 
			 * article panel.
			 */
			public static readonly articlePanelOrder: Adobe.Indesign.ExportOrder;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** based on document layout. */
			public static readonly LAYOUT_ORDER: Adobe.Indesign.ExportOrder;
			/** Alias for LAYOUT_ORDER. based on document layout. */
			public static readonly layoutOrder: Adobe.Indesign.ExportOrder;
			/** based on XML structure. */
			public static readonly XML_STRUCTURE_ORDER: Adobe.Indesign.ExportOrder;
			/** Alias for XML_STRUCTURE_ORDER. based on XML structure. */
			public static readonly xmlStructureOrder: Adobe.Indesign.ExportOrder;
			/** Constructor */
			public constructor();
		}
	}
}
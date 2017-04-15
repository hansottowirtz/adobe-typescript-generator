/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AssignmentExportOptions extends Adobe.Csawlib.CSEnumBase {
			/** Exports only spreads with assigned frames. */
			public static readonly ASSIGNED_SPREADS: Adobe.Indesign.AssignmentExportOptions;
			/**
			 * Alias for ASSIGNED_SPREADS. Exports only spreads with 
			 * assigned frames.
			 */
			public static readonly assignedSpreads: Adobe.Indesign.AssignmentExportOptions;
			/** Exports frames but does not export content. */
			public static readonly EMPTY_FRAMES: Adobe.Indesign.AssignmentExportOptions;
			/**
			 * Alias for EMPTY_FRAMES. Exports frames but does not export 
			 * content.
			 */
			public static readonly emptyFrames: Adobe.Indesign.AssignmentExportOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for EVERYTHING. Exports the entire document. */
			public static readonly everything: Adobe.Indesign.AssignmentExportOptions;
			/** Exports the entire document. */
			public static readonly EVERYTHING: Adobe.Indesign.AssignmentExportOptions;
			/** Constructor */
			public constructor();
		}
	}
}
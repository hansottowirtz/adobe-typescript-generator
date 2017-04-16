/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AssignmentExportOptions extends Adobe.Csawlib.CSEnumBase {
			/** Exports only spreads with assigned frames. */
			public static readonly ASSIGNED_SPREADS: Adobe.Incopy.AssignmentExportOptions;
			/**
			 * Alias for ASSIGNED_SPREADS. Exports only spreads with 
			 * assigned frames.
			 */
			public static readonly assignedSpreads: Adobe.Incopy.AssignmentExportOptions;
			/** Exports frames but does not export content. */
			public static readonly EMPTY_FRAMES: Adobe.Incopy.AssignmentExportOptions;
			/**
			 * Alias for EMPTY_FRAMES. Exports frames but does not export 
			 * content.
			 */
			public static readonly emptyFrames: Adobe.Incopy.AssignmentExportOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for EVERYTHING. Exports the entire document. */
			public static readonly everything: Adobe.Incopy.AssignmentExportOptions;
			/** Exports the entire document. */
			public static readonly EVERYTHING: Adobe.Incopy.AssignmentExportOptions;
			/** Constructor */
			public constructor();
		}
	}
}
/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AssignmentExportOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Exports only spreads with assigned frames.
			 * @type {Adobe.Indesign.AssignmentExportOptions}
			 * @readonly
			 */
			public static readonly ASSIGNED_SPREADS: Adobe.Indesign.AssignmentExportOptions;
			/**
			 * Alias for ASSIGNED_SPREADS. Exports only spreads with 
			 * assigned frames.
			 * @type {Adobe.Indesign.AssignmentExportOptions}
			 * @readonly
			 */
			public static readonly assignedSpreads: Adobe.Indesign.AssignmentExportOptions;
			/**
			 * Exports frames but does not export content.
			 * @type {Adobe.Indesign.AssignmentExportOptions}
			 * @readonly
			 */
			public static readonly EMPTY_FRAMES: Adobe.Indesign.AssignmentExportOptions;
			/**
			 * Alias for EMPTY_FRAMES. Exports frames but does not export 
			 * content.
			 * @type {Adobe.Indesign.AssignmentExportOptions}
			 * @readonly
			 */
			public static readonly emptyFrames: Adobe.Indesign.AssignmentExportOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for EVERYTHING. Exports the entire document.
			 * @type {Adobe.Indesign.AssignmentExportOptions}
			 * @readonly
			 */
			public static readonly everything: Adobe.Indesign.AssignmentExportOptions;
			/**
			 * Exports the entire document.
			 * @type {Adobe.Indesign.AssignmentExportOptions}
			 * @readonly
			 */
			public static readonly EVERYTHING: Adobe.Indesign.AssignmentExportOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
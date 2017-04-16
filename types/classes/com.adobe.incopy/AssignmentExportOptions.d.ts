/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AssignmentExportOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Exports only spreads with assigned frames.
			 * @type {Adobe.Incopy.AssignmentExportOptions}
			 * @readonly
			 */
			public static readonly ASSIGNED_SPREADS: Adobe.Incopy.AssignmentExportOptions;
			/**
			 * Alias for ASSIGNED_SPREADS. Exports only spreads with 
			 * assigned frames.
			 * @type {Adobe.Incopy.AssignmentExportOptions}
			 * @readonly
			 */
			public static readonly assignedSpreads: Adobe.Incopy.AssignmentExportOptions;
			/**
			 * Exports frames but does not export content.
			 * @type {Adobe.Incopy.AssignmentExportOptions}
			 * @readonly
			 */
			public static readonly EMPTY_FRAMES: Adobe.Incopy.AssignmentExportOptions;
			/**
			 * Alias for EMPTY_FRAMES. Exports frames but does not export 
			 * content.
			 * @type {Adobe.Incopy.AssignmentExportOptions}
			 * @readonly
			 */
			public static readonly emptyFrames: Adobe.Incopy.AssignmentExportOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for EVERYTHING. Exports the entire document.
			 * @type {Adobe.Incopy.AssignmentExportOptions}
			 * @readonly
			 */
			public static readonly everything: Adobe.Incopy.AssignmentExportOptions;
			/**
			 * Exports the entire document.
			 * @type {Adobe.Incopy.AssignmentExportOptions}
			 * @readonly
			 */
			public static readonly EVERYTHING: Adobe.Incopy.AssignmentExportOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
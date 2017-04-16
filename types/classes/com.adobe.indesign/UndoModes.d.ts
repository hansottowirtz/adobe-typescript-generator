/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class UndoModes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Automatically undo the entire script as part of the previous 
			 * step.
			 */
			public static readonly AUTO_UNDO: Adobe.Indesign.UndoModes;
			/**
			 * Alias for AUTO_UNDO. Automatically undo the entire script as 
			 * part of the previous step.
			 */
			public static readonly autoUndo: Adobe.Indesign.UndoModes;
			/** Undo the entire script as a single step. */
			public static readonly ENTIRE_SCRIPT: Adobe.Indesign.UndoModes;
			/**
			 * Alias for ENTIRE_SCRIPT. Undo the entire script as a single 
			 * step.
			 */
			public static readonly entireScript: Adobe.Indesign.UndoModes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Fast undo the entire script as a single step. */
			public static readonly FAST_ENTIRE_SCRIPT: Adobe.Indesign.UndoModes;
			/**
			 * Alias for FAST_ENTIRE_SCRIPT. Fast undo the entire script as 
			 * a single step.
			 */
			public static readonly fastEntireScript: Adobe.Indesign.UndoModes;
			/** Undo each script request as a separate step. */
			public static readonly SCRIPT_REQUEST: Adobe.Indesign.UndoModes;
			/**
			 * Alias for SCRIPT_REQUEST. Undo each script request as a 
			 * separate step.
			 */
			public static readonly scriptRequest: Adobe.Indesign.UndoModes;
			/** Constructor */
			public constructor();
		}
	}
}
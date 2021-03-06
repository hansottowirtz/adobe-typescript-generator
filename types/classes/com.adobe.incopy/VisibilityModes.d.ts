/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class VisibilityModes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ALL. Prints visible and hidden notes.
			 * @type {Adobe.Incopy.VisibilityModes}
			 * @readonly
			 */
			public static readonly all: Adobe.Incopy.VisibilityModes;
			/**
			 * Prints visible and hidden notes.
			 * @type {Adobe.Incopy.VisibilityModes}
			 * @readonly
			 */
			public static readonly ALL: Adobe.Incopy.VisibilityModes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Does not print any notes.
			 * @type {Adobe.Incopy.VisibilityModes}
			 * @readonly
			 */
			public static readonly none: Adobe.Incopy.VisibilityModes;
			/**
			 * Does not print any notes.
			 * @type {Adobe.Incopy.VisibilityModes}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Incopy.VisibilityModes;
			/**
			 * Prints only visible notes.
			 * @type {Adobe.Incopy.VisibilityModes}
			 * @readonly
			 */
			public static readonly ONLY_VISIBLE: Adobe.Incopy.VisibilityModes;
			/**
			 * Alias for ONLY_VISIBLE. Prints only visible notes.
			 * @type {Adobe.Incopy.VisibilityModes}
			 * @readonly
			 */
			public static readonly onlyVisible: Adobe.Incopy.VisibilityModes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
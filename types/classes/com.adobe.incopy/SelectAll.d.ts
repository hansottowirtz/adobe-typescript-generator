/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SelectAll extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ALL. Selects all.
			 * @type {Adobe.Incopy.SelectAll}
			 * @readonly
			 */
			public static readonly all: Adobe.Incopy.SelectAll;
			/**
			 * Selects all.
			 * @type {Adobe.Incopy.SelectAll}
			 * @readonly
			 */
			public static readonly ALL: Adobe.Incopy.SelectAll;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
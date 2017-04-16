/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SelectAll extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ALL. Selects all.
			 * @type {Adobe.Indesign.SelectAll}
			 * @readonly
			 */
			public static readonly all: Adobe.Indesign.SelectAll;
			/**
			 * Selects all.
			 * @type {Adobe.Indesign.SelectAll}
			 * @readonly
			 */
			public static readonly ALL: Adobe.Indesign.SelectAll;
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
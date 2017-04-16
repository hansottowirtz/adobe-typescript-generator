/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Sequences extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ALL. Prints all pages.
			 * @type {Adobe.Indesign.Sequences}
			 * @readonly
			 */
			public static readonly all: Adobe.Indesign.Sequences;
			/**
			 * Prints all pages.
			 * @type {Adobe.Indesign.Sequences}
			 * @readonly
			 */
			public static readonly ALL: Adobe.Indesign.Sequences;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for EVEN. Prints only even-numbered pages.
			 * @type {Adobe.Indesign.Sequences}
			 * @readonly
			 */
			public static readonly even: Adobe.Indesign.Sequences;
			/**
			 * Prints only even-numbered pages.
			 * @type {Adobe.Indesign.Sequences}
			 * @readonly
			 */
			public static readonly EVEN: Adobe.Indesign.Sequences;
			/**
			 * Alias for ODD. Prints only odd-numbered pages.
			 * @type {Adobe.Indesign.Sequences}
			 * @readonly
			 */
			public static readonly odd: Adobe.Indesign.Sequences;
			/**
			 * Prints only odd-numbered pages.
			 * @type {Adobe.Indesign.Sequences}
			 * @readonly
			 */
			public static readonly ODD: Adobe.Indesign.Sequences;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
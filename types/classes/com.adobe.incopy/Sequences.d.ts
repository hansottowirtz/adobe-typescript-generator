/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Sequences extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ALL. Prints all pages.
			 * @type {Adobe.Incopy.Sequences}
			 * @readonly
			 */
			public static readonly all: Adobe.Incopy.Sequences;
			/**
			 * Prints all pages.
			 * @type {Adobe.Incopy.Sequences}
			 * @readonly
			 */
			public static readonly ALL: Adobe.Incopy.Sequences;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for EVEN. Prints only even-numbered pages.
			 * @type {Adobe.Incopy.Sequences}
			 * @readonly
			 */
			public static readonly even: Adobe.Incopy.Sequences;
			/**
			 * Prints only even-numbered pages.
			 * @type {Adobe.Incopy.Sequences}
			 * @readonly
			 */
			public static readonly EVEN: Adobe.Incopy.Sequences;
			/**
			 * Alias for ODD. Prints only odd-numbered pages.
			 * @type {Adobe.Incopy.Sequences}
			 * @readonly
			 */
			public static readonly odd: Adobe.Incopy.Sequences;
			/**
			 * Prints only odd-numbered pages.
			 * @type {Adobe.Incopy.Sequences}
			 * @readonly
			 */
			public static readonly ODD: Adobe.Incopy.Sequences;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
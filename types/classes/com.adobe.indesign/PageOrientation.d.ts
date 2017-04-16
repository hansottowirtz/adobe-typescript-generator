/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageOrientation extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for LANDSCAPE. Landscape.
			 * @type {Adobe.Indesign.PageOrientation}
			 * @readonly
			 */
			public static readonly landscape: Adobe.Indesign.PageOrientation;
			/**
			 * Landscape.
			 * @type {Adobe.Indesign.PageOrientation}
			 * @readonly
			 */
			public static readonly LANDSCAPE: Adobe.Indesign.PageOrientation;
			/**
			 * Alias for PORTRAIT. Portrait.
			 * @type {Adobe.Indesign.PageOrientation}
			 * @readonly
			 */
			public static readonly portrait: Adobe.Indesign.PageOrientation;
			/**
			 * Portrait.
			 * @type {Adobe.Indesign.PageOrientation}
			 * @readonly
			 */
			public static readonly PORTRAIT: Adobe.Indesign.PageOrientation;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
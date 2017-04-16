/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PrintColorHandling extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.PrintColorHandling}
			 * @readonly
			 */
			public static readonly PHOTOSHOPMANAGED: Adobe.Photoshop.PrintColorHandling;
			/**
			 * @type {Adobe.Photoshop.PrintColorHandling}
			 * @readonly
			 */
			public static readonly PRINTERMANAGED: Adobe.Photoshop.PrintColorHandling;
			/**
			 * @type {Adobe.Photoshop.PrintColorHandling}
			 * @readonly
			 */
			public static readonly SEPARATIONS: Adobe.Photoshop.PrintColorHandling;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
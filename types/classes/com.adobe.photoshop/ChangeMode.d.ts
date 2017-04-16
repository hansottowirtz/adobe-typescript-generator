/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ChangeMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.ChangeMode}
			 * @readonly
			 */
			public static readonly BITMAP: Adobe.Photoshop.ChangeMode;
			/**
			 * @type {Adobe.Photoshop.ChangeMode}
			 * @readonly
			 */
			public static readonly CMYK: Adobe.Photoshop.ChangeMode;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.ChangeMode}
			 * @readonly
			 */
			public static readonly GRAYSCALE: Adobe.Photoshop.ChangeMode;
			/**
			 * @type {Adobe.Photoshop.ChangeMode}
			 * @readonly
			 */
			public static readonly INDEXEDCOLOR: Adobe.Photoshop.ChangeMode;
			/**
			 * @type {Adobe.Photoshop.ChangeMode}
			 * @readonly
			 */
			public static readonly LAB: Adobe.Photoshop.ChangeMode;
			/**
			 * @type {Adobe.Photoshop.ChangeMode}
			 * @readonly
			 */
			public static readonly MULTICHANNEL: Adobe.Photoshop.ChangeMode;
			/**
			 * @type {Adobe.Photoshop.ChangeMode}
			 * @readonly
			 */
			public static readonly RGB: Adobe.Photoshop.ChangeMode;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
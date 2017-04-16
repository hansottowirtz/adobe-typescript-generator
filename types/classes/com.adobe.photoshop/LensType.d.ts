/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class LensType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.LensType}
			 * @readonly
			 */
			public static readonly MOVIEPRIME: Adobe.Photoshop.LensType;
			/**
			 * @type {Adobe.Photoshop.LensType}
			 * @readonly
			 */
			public static readonly PRIME105: Adobe.Photoshop.LensType;
			/**
			 * @type {Adobe.Photoshop.LensType}
			 * @readonly
			 */
			public static readonly PRIME35: Adobe.Photoshop.LensType;
			/**
			 * @type {Adobe.Photoshop.LensType}
			 * @readonly
			 */
			public static readonly ZOOMLENS: Adobe.Photoshop.LensType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
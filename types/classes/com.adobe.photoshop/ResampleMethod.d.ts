/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ResampleMethod extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.ResampleMethod}
			 * @readonly
			 */
			public static readonly BICUBIC: Adobe.Photoshop.ResampleMethod;
			/**
			 * @type {Adobe.Photoshop.ResampleMethod}
			 * @readonly
			 */
			public static readonly BICUBICSHARPER: Adobe.Photoshop.ResampleMethod;
			/**
			 * @type {Adobe.Photoshop.ResampleMethod}
			 * @readonly
			 */
			public static readonly BICUBICSMOOTHER: Adobe.Photoshop.ResampleMethod;
			/**
			 * @type {Adobe.Photoshop.ResampleMethod}
			 * @readonly
			 */
			public static readonly BILINEAR: Adobe.Photoshop.ResampleMethod;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.ResampleMethod}
			 * @readonly
			 */
			public static readonly NEARESTNEIGHBOR: Adobe.Photoshop.ResampleMethod;
			/**
			 * @type {Adobe.Photoshop.ResampleMethod}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Photoshop.ResampleMethod;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
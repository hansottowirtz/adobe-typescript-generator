/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DCSType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.DCSType}
			 * @readonly
			 */
			public static readonly COLORCOMPOSITE: Adobe.Photoshop.DCSType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.DCSType}
			 * @readonly
			 */
			public static readonly GRAYSCALECOMPOSITE: Adobe.Photoshop.DCSType;
			/**
			 * @type {Adobe.Photoshop.DCSType}
			 * @readonly
			 */
			public static readonly NOCOMPOSITE: Adobe.Photoshop.DCSType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
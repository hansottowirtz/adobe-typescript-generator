/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PathKind extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.PathKind}
			 * @readonly
			 */
			public static readonly CLIPPINGPATH: Adobe.Photoshop.PathKind;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.PathKind}
			 * @readonly
			 */
			public static readonly NORMALPATH: Adobe.Photoshop.PathKind;
			/**
			 * @type {Adobe.Photoshop.PathKind}
			 * @readonly
			 */
			public static readonly TEXTMASK: Adobe.Photoshop.PathKind;
			/**
			 * @type {Adobe.Photoshop.PathKind}
			 * @readonly
			 */
			public static readonly VECTORMASK: Adobe.Photoshop.PathKind;
			/**
			 * @type {Adobe.Photoshop.PathKind}
			 * @readonly
			 */
			public static readonly WORKPATH: Adobe.Photoshop.PathKind;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
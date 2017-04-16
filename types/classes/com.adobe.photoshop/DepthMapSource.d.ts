/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DepthMapSource extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.DepthMapSource}
			 * @readonly
			 */
			public static readonly IMAGEHIGHLIGHT: Adobe.Photoshop.DepthMapSource;
			/**
			 * @type {Adobe.Photoshop.DepthMapSource}
			 * @readonly
			 */
			public static readonly LAYERMASK: Adobe.Photoshop.DepthMapSource;
			/**
			 * @type {Adobe.Photoshop.DepthMapSource}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Photoshop.DepthMapSource;
			/**
			 * @type {Adobe.Photoshop.DepthMapSource}
			 * @readonly
			 */
			public static readonly TRANSPARENCYCHANNEL: Adobe.Photoshop.DepthMapSource;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
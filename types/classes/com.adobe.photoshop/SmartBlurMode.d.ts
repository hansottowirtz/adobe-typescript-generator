/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SmartBlurMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.SmartBlurMode}
			 * @readonly
			 */
			public static readonly EDGEONLY: Adobe.Photoshop.SmartBlurMode;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.SmartBlurMode}
			 * @readonly
			 */
			public static readonly NORMAL: Adobe.Photoshop.SmartBlurMode;
			/**
			 * @type {Adobe.Photoshop.SmartBlurMode}
			 * @readonly
			 */
			public static readonly OVERLAYEDGE: Adobe.Photoshop.SmartBlurMode;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SmartBlurQuality extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.SmartBlurQuality}
			 * @readonly
			 */
			public static readonly HIGH: Adobe.Photoshop.SmartBlurQuality;
			/**
			 * @type {Adobe.Photoshop.SmartBlurQuality}
			 * @readonly
			 */
			public static readonly LOW: Adobe.Photoshop.SmartBlurQuality;
			/**
			 * @type {Adobe.Photoshop.SmartBlurQuality}
			 * @readonly
			 */
			public static readonly MEDIUM: Adobe.Photoshop.SmartBlurQuality;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
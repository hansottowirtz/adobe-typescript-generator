/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class FormatOptions extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.FormatOptions}
			 * @readonly
			 */
			public static readonly OPTIMIZEDBASELINE: Adobe.Photoshop.FormatOptions;
			/**
			 * @type {Adobe.Photoshop.FormatOptions}
			 * @readonly
			 */
			public static readonly PROGRESSIVE: Adobe.Photoshop.FormatOptions;
			/**
			 * @type {Adobe.Photoshop.FormatOptions}
			 * @readonly
			 */
			public static readonly STANDARDBASELINE: Adobe.Photoshop.FormatOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
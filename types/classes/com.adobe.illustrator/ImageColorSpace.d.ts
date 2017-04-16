/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ImageColorSpace extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.ImageColorSpace}
			 * @readonly
			 */
			public static readonly CMYK: Adobe.Illustrator.ImageColorSpace;
			/**
			 * @type {Adobe.Illustrator.ImageColorSpace}
			 * @readonly
			 */
			public static readonly DeviceN: Adobe.Illustrator.ImageColorSpace;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.ImageColorSpace}
			 * @readonly
			 */
			public static readonly GrayScale: Adobe.Illustrator.ImageColorSpace;
			/**
			 * @type {Adobe.Illustrator.ImageColorSpace}
			 * @readonly
			 */
			public static readonly Indexed: Adobe.Illustrator.ImageColorSpace;
			/**
			 * @type {Adobe.Illustrator.ImageColorSpace}
			 * @readonly
			 */
			public static readonly LAB: Adobe.Illustrator.ImageColorSpace;
			/**
			 * @type {Adobe.Illustrator.ImageColorSpace}
			 * @readonly
			 */
			public static readonly RGB: Adobe.Illustrator.ImageColorSpace;
			/**
			 * @type {Adobe.Illustrator.ImageColorSpace}
			 * @readonly
			 */
			public static readonly Separation: Adobe.Illustrator.ImageColorSpace;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
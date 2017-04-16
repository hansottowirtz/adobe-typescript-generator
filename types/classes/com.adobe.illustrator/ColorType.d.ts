/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ColorType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.ColorType}
			 * @readonly
			 */
			public static readonly CMYK: Adobe.Illustrator.ColorType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.ColorType}
			 * @readonly
			 */
			public static readonly GRADIENT: Adobe.Illustrator.ColorType;
			/**
			 * @type {Adobe.Illustrator.ColorType}
			 * @readonly
			 */
			public static readonly GRAY: Adobe.Illustrator.ColorType;
			/**
			 * @type {Adobe.Illustrator.ColorType}
			 * @readonly
			 */
			public static readonly None: Adobe.Illustrator.ColorType;
			/**
			 * @type {Adobe.Illustrator.ColorType}
			 * @readonly
			 */
			public static readonly PATTERN: Adobe.Illustrator.ColorType;
			/**
			 * @type {Adobe.Illustrator.ColorType}
			 * @readonly
			 */
			public static readonly RGB: Adobe.Illustrator.ColorType;
			/**
			 * @type {Adobe.Illustrator.ColorType}
			 * @readonly
			 */
			public static readonly SPOT: Adobe.Illustrator.ColorType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
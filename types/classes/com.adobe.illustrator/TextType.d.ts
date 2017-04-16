/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class TextType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.TextType}
			 * @readonly
			 */
			public static readonly AREATEXT: Adobe.Illustrator.TextType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.TextType}
			 * @readonly
			 */
			public static readonly PATHTEXT: Adobe.Illustrator.TextType;
			/**
			 * @type {Adobe.Illustrator.TextType}
			 * @readonly
			 */
			public static readonly POINTTEXT: Adobe.Illustrator.TextType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
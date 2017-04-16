/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class TextOrientation extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.TextOrientation}
			 * @readonly
			 */
			public static readonly Horizontal: Adobe.Illustrator.TextOrientation;
			/**
			 * @type {Adobe.Illustrator.TextOrientation}
			 * @readonly
			 */
			public static readonly VERTICAL: Adobe.Illustrator.TextOrientation;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
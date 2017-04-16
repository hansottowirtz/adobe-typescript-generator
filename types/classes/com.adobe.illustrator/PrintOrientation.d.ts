/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PrintOrientation extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.PrintOrientation}
			 * @readonly
			 */
			public static readonly AUTOROTATE: Adobe.Illustrator.PrintOrientation;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.PrintOrientation}
			 * @readonly
			 */
			public static readonly LANDSCAPE: Adobe.Illustrator.PrintOrientation;
			/**
			 * @type {Adobe.Illustrator.PrintOrientation}
			 * @readonly
			 */
			public static readonly PORTRAIT: Adobe.Illustrator.PrintOrientation;
			/**
			 * @type {Adobe.Illustrator.PrintOrientation}
			 * @readonly
			 */
			public static readonly REVERSELANDSCAPE: Adobe.Illustrator.PrintOrientation;
			/**
			 * @type {Adobe.Illustrator.PrintOrientation}
			 * @readonly
			 */
			public static readonly REVERSEPORTRAIT: Adobe.Illustrator.PrintOrientation;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
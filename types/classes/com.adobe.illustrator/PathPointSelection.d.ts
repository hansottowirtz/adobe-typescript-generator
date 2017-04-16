/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PathPointSelection extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.PathPointSelection}
			 * @readonly
			 */
			public static readonly ANCHORPOINT: Adobe.Illustrator.PathPointSelection;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.PathPointSelection}
			 * @readonly
			 */
			public static readonly LEFTDIRECTION: Adobe.Illustrator.PathPointSelection;
			/**
			 * @type {Adobe.Illustrator.PathPointSelection}
			 * @readonly
			 */
			public static readonly LEFTRIGHTPOINT: Adobe.Illustrator.PathPointSelection;
			/**
			 * @type {Adobe.Illustrator.PathPointSelection}
			 * @readonly
			 */
			public static readonly NOSELECTION: Adobe.Illustrator.PathPointSelection;
			/**
			 * @type {Adobe.Illustrator.PathPointSelection}
			 * @readonly
			 */
			public static readonly RIGHTDIRECTION: Adobe.Illustrator.PathPointSelection;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
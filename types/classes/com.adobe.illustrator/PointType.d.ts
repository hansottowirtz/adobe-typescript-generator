/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PointType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.PointType}
			 * @readonly
			 */
			public static readonly CORNER: Adobe.Illustrator.PointType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.PointType}
			 * @readonly
			 */
			public static readonly SMOOTH: Adobe.Illustrator.PointType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
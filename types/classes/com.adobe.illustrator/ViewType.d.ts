/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ViewType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.ViewType}
			 * @readonly
			 */
			public static readonly TRACINGVIEWIMAGE: Adobe.Illustrator.ViewType;
			/**
			 * @type {Adobe.Illustrator.ViewType}
			 * @readonly
			 */
			public static readonly TRACINGVIEWVECTOROUTLINES: Adobe.Illustrator.ViewType;
			/**
			 * @type {Adobe.Illustrator.ViewType}
			 * @readonly
			 */
			public static readonly TRACINGVIEWVECTOROUTLINESWITHTRACING: Adobe.Illustrator.ViewType;
			/**
			 * @type {Adobe.Illustrator.ViewType}
			 * @readonly
			 */
			public static readonly TRACINGVIEWVECTORTRACINGRESULT: Adobe.Illustrator.ViewType;
			/**
			 * @type {Adobe.Illustrator.ViewType}
			 * @readonly
			 */
			public static readonly TRACINGVIEWVECTORWITHTRANSPARENTIMAGE: Adobe.Illustrator.ViewType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
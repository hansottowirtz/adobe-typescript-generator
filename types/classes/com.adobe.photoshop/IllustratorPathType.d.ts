/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class IllustratorPathType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.IllustratorPathType}
			 * @readonly
			 */
			public static readonly ALLPATHS: Adobe.Photoshop.IllustratorPathType;
			/**
			 * @type {Adobe.Photoshop.IllustratorPathType}
			 * @readonly
			 */
			public static readonly DOCUMENTBOUNDS: Adobe.Photoshop.IllustratorPathType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.IllustratorPathType}
			 * @readonly
			 */
			public static readonly NAMEDPATH: Adobe.Photoshop.IllustratorPathType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
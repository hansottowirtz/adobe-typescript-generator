/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PathType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The path is a closed path.
			 * @type {Adobe.Indesign.PathType}
			 * @readonly
			 */
			public static readonly CLOSED_PATH: Adobe.Indesign.PathType;
			/**
			 * Alias for CLOSED_PATH. The path is a closed path.
			 * @type {Adobe.Indesign.PathType}
			 * @readonly
			 */
			public static readonly closedPath: Adobe.Indesign.PathType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The path is an open path.
			 * @type {Adobe.Indesign.PathType}
			 * @readonly
			 */
			public static readonly OPEN_PATH: Adobe.Indesign.PathType;
			/**
			 * Alias for OPEN_PATH. The path is an open path.
			 * @type {Adobe.Indesign.PathType}
			 * @readonly
			 */
			public static readonly openPath: Adobe.Indesign.PathType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
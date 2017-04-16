/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PathType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The path is a closed path.
			 * @type {Adobe.Incopy.PathType}
			 * @readonly
			 */
			public static readonly CLOSED_PATH: Adobe.Incopy.PathType;
			/**
			 * Alias for CLOSED_PATH. The path is a closed path.
			 * @type {Adobe.Incopy.PathType}
			 * @readonly
			 */
			public static readonly closedPath: Adobe.Incopy.PathType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The path is an open path.
			 * @type {Adobe.Incopy.PathType}
			 * @readonly
			 */
			public static readonly OPEN_PATH: Adobe.Incopy.PathType;
			/**
			 * Alias for OPEN_PATH. The path is an open path.
			 * @type {Adobe.Incopy.PathType}
			 * @readonly
			 */
			public static readonly openPath: Adobe.Incopy.PathType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
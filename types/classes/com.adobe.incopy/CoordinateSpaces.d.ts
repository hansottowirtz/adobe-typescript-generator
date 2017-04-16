/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class CoordinateSpaces extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Inner coordinates
			 * @type {Adobe.Incopy.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly INNER_COORDINATES: Adobe.Incopy.CoordinateSpaces;
			/**
			 * Alias for INNER_COORDINATES. Inner coordinates
			 * @type {Adobe.Incopy.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly innerCoordinates: Adobe.Incopy.CoordinateSpaces;
			/**
			 * Parent coordinates
			 * @type {Adobe.Incopy.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly PARENT_COORDINATES: Adobe.Incopy.CoordinateSpaces;
			/**
			 * Alias for PARENT_COORDINATES. Parent coordinates
			 * @type {Adobe.Incopy.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly parentCoordinates: Adobe.Incopy.CoordinateSpaces;
			/**
			 * Pasteboard coordinates
			 * @type {Adobe.Incopy.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly PASTEBOARD_COORDINATES: Adobe.Incopy.CoordinateSpaces;
			/**
			 * Alias for PASTEBOARD_COORDINATES. Pasteboard coordinates
			 * @type {Adobe.Incopy.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly pasteboardCoordinates: Adobe.Incopy.CoordinateSpaces;
			/**
			 * Spread coordinates.
			 * @type {Adobe.Incopy.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly SPREAD_COORDINATES: Adobe.Incopy.CoordinateSpaces;
			/**
			 * Alias for SPREAD_COORDINATES. Spread coordinates.
			 * @type {Adobe.Incopy.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly spreadCoordinates: Adobe.Incopy.CoordinateSpaces;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
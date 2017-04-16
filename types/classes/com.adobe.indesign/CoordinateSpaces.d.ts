/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CoordinateSpaces extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Inner coordinates
			 * @type {Adobe.Indesign.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly INNER_COORDINATES: Adobe.Indesign.CoordinateSpaces;
			/**
			 * Alias for INNER_COORDINATES. Inner coordinates
			 * @type {Adobe.Indesign.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly innerCoordinates: Adobe.Indesign.CoordinateSpaces;
			/**
			 * Page coordinates.
			 * @type {Adobe.Indesign.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly PAGE_COORDINATES: Adobe.Indesign.CoordinateSpaces;
			/**
			 * Alias for PAGE_COORDINATES. Page coordinates.
			 * @type {Adobe.Indesign.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly pageCoordinates: Adobe.Indesign.CoordinateSpaces;
			/**
			 * Parent coordinates
			 * @type {Adobe.Indesign.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly PARENT_COORDINATES: Adobe.Indesign.CoordinateSpaces;
			/**
			 * Alias for PARENT_COORDINATES. Parent coordinates
			 * @type {Adobe.Indesign.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly parentCoordinates: Adobe.Indesign.CoordinateSpaces;
			/**
			 * Pasteboard coordinates
			 * @type {Adobe.Indesign.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly PASTEBOARD_COORDINATES: Adobe.Indesign.CoordinateSpaces;
			/**
			 * Alias for PASTEBOARD_COORDINATES. Pasteboard coordinates
			 * @type {Adobe.Indesign.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly pasteboardCoordinates: Adobe.Indesign.CoordinateSpaces;
			/**
			 * Spread coordinates.
			 * @type {Adobe.Indesign.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly SPREAD_COORDINATES: Adobe.Indesign.CoordinateSpaces;
			/**
			 * Alias for SPREAD_COORDINATES. Spread coordinates.
			 * @type {Adobe.Indesign.CoordinateSpaces}
			 * @readonly
			 */
			public static readonly spreadCoordinates: Adobe.Indesign.CoordinateSpaces;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}
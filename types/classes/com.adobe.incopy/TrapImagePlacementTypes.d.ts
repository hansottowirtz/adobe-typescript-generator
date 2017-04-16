/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TrapImagePlacementTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Creates a trap that straddles the edge between vector 
			 * objects and bitmap images.
			 */
			public static readonly CENTER_EDGES: Adobe.Incopy.TrapImagePlacementTypes;
			/**
			 * Alias for CENTER_EDGES. Creates a trap that straddles the 
			 * edge between vector objects and bitmap images.
			 */
			public static readonly centerEdges: Adobe.Incopy.TrapImagePlacementTypes;
			/**
			 * Alias for CHOKE. Causes vector objects to overlap abutting 
			 * images.
			 */
			public static readonly choke: Adobe.Incopy.TrapImagePlacementTypes;
			/** Causes vector objects to overlap abutting images. */
			public static readonly CHOKE: Adobe.Incopy.TrapImagePlacementTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Applies the same trapping rules as used elsewhere in the 
			 * document. Note: When used to trap an object to a photograph, 
			 * can result in noticeably uneven edges as the trap moves from 
			 * one side of the edge to another.
			 */
			public static readonly IMAGE_NEUTRAL_DENSITY: Adobe.Incopy.TrapImagePlacementTypes;
			/**
			 * Alias for IMAGE_NEUTRAL_DENSITY. Applies the same trapping 
			 * rules as used elsewhere in the document. Note: When used to 
			 * trap an object to a photograph, can result in noticeably 
			 * uneven edges as the trap moves from one side of the edge to 
			 * another.
			 */
			public static readonly imageNeutralDensity: Adobe.Incopy.TrapImagePlacementTypes;
			/** Causes bitmap images to overlap the abutting objects. */
			public static readonly IMAGES_OVER_SPREAD: Adobe.Incopy.TrapImagePlacementTypes;
			/**
			 * Alias for IMAGES_OVER_SPREAD. Causes bitmap images to 
			 * overlap the abutting objects.
			 */
			public static readonly imagesOverSpread: Adobe.Incopy.TrapImagePlacementTypes;
			/** Constructor */
			public constructor();
		}
	}
}
/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TrapImagePlacementTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Creates a trap that straddles the edge between vector 
			 * objects and bitmap images.
			 */
			public static readonly CENTER_EDGES: Adobe.Indesign.TrapImagePlacementTypes;
			/**
			 * Alias for CENTER_EDGES. Creates a trap that straddles the 
			 * edge between vector objects and bitmap images.
			 */
			public static readonly centerEdges: Adobe.Indesign.TrapImagePlacementTypes;
			/**
			 * Alias for CHOKE. Causes vector objects to overlap abutting 
			 * images.
			 */
			public static readonly choke: Adobe.Indesign.TrapImagePlacementTypes;
			/** Causes vector objects to overlap abutting images. */
			public static readonly CHOKE: Adobe.Indesign.TrapImagePlacementTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Applies the same trapping rules as used elsewhere in the 
			 * document. Note: When used to trap an object to a photograph, 
			 * can result in noticeably uneven edges as the trap moves from 
			 * one side of the edge to another.
			 */
			public static readonly IMAGE_NEUTRAL_DENSITY: Adobe.Indesign.TrapImagePlacementTypes;
			/**
			 * Alias for IMAGE_NEUTRAL_DENSITY. Applies the same trapping 
			 * rules as used elsewhere in the document. Note: When used to 
			 * trap an object to a photograph, can result in noticeably 
			 * uneven edges as the trap moves from one side of the edge to 
			 * another.
			 */
			public static readonly imageNeutralDensity: Adobe.Indesign.TrapImagePlacementTypes;
			/** Causes bitmap images to overlap the abutting objects. */
			public static readonly IMAGES_OVER_SPREAD: Adobe.Indesign.TrapImagePlacementTypes;
			/**
			 * Alias for IMAGES_OVER_SPREAD. Causes bitmap images to 
			 * overlap the abutting objects.
			 */
			public static readonly imagesOverSpread: Adobe.Indesign.TrapImagePlacementTypes;
			/** Constructor */
			public constructor();
		}
	}
}
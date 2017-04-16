/// <reference path="../../packages/com.adobe.cshostadapter/index.d.ts"/>

declare namespace Adobe {
	namespace Cshostadapter {
		/**
		 * Represents an event which occurred in Photoshop. Provides a 
		 * set of event  types which may be listened for via 
		 * PSEventAdapter.addEventListener(...).
		 */
		class PSEvent extends Adobe.Flash.Events.Event {
			/**
			 * Constructs a new PSEvent with the specified type. The type 
			 * should be a String representation of the event's Photoshop 
			 * runtime ID.
			 */
			public constructor();
			public static readonly _3DTRANSFORM: any;
			public static readonly ACCENTED_EDGES: any;
			public static readonly ADD: any;
			public static readonly ADD_NOISE: any;
			public static readonly ADD_TO: any;
			public static readonly ALIGN: any;
			public static readonly ALL: any;
			public static readonly ANGLED_STROKES: any;
			public static readonly APPLY_IMAGE: any;
			public static readonly APPLY_STYLE: any;
			public static readonly ASSERT: any;
			public static readonly AVERAGE: any;
			public static readonly BACK_LIGHT: any;
			public static readonly BAS_RELIEF: any;
			public static readonly BATCH: any;
			public static readonly BATCH_FROM_DROPLET: any;
			public static readonly BLUR: any;
			public static readonly BLUR_MORE: any;
			public static readonly BORDER: any;
			public static readonly BRIGHTNESS: any;
			public static readonly CANVAS_SIZE: any;
			public static readonly CHALK_CHARCOAL: any;
			public static readonly CHANNEL_MIXER: any;
			public static readonly CHARCOAL: any;
			public static readonly CHROME: any;
			public static readonly CLEAR: any;
			public static readonly CLOSE: any;
			public static readonly CLOUDS: any;
			public static readonly COLOR_BALANCE: any;
			public static readonly COLOR_CAST: any;
			public static readonly COLOR_HALFTONE: any;
			public static readonly COLOR_RANGE: any;
			public static readonly COLORED_PENCIL: any;
			public static readonly CONTE_CRAYON: any;
			public static readonly CONTRACT: any;
			public static readonly CONVERT_MODE: any;
			public static readonly COPY: any;
			public static readonly COPY_EFFECTS: any;
			public static readonly COPY_MERGED: any;
			public static readonly COPY_TO_LAYER: any;
			public static readonly CRAQUELURE: any;
			public static readonly CREATE_DROPLET: any;
			public static readonly CROP: any;
			public static readonly CROSSHATCH: any;
			public static readonly CRYSTALLIZE: any;
			public static readonly CURVES: any;
			public static readonly CUSTOM: any;
			public static readonly CUT: any;
			public static readonly CUT_TO_LAYER: any;
			public static readonly CUTOUT: any;
			public static readonly DARK_STROKES: any;
			public static readonly DE_INTERLACE: any;
			public static readonly DEFINE_PATTERN: any;
			public static readonly DEFRINGE: any;
			public static readonly DELETE: any;
			public static readonly DESATURATE: any;
			public static readonly DESELECT: any;
			public static readonly DESPECKLE: any;
			public static readonly DIFFERENCE_CLOUDS: any;
			public static readonly DIFFUSE: any;
			public static readonly DIFFUSE_GLOW: any;
			public static readonly DISABLE_LAYER_FX: any;
			public static readonly DISPLACE: any;
			public static readonly DISTRIBUTE: any;
			public static readonly DRAW: any;
			public static readonly DRY_BRUSH: any;
			public static readonly DUPLICATE: any;
			public static readonly DUST_AND_SCRATCHES: any;
			public static readonly EMBOSS: any;
			public static readonly EQUALIZE: any;
			public static readonly EXCHANGE: any;
			public static readonly EXPAND: any;
			public static readonly EXPORT: any;
			public static readonly EXTRUDE: any;
			public static readonly FACET: any;
			public static readonly FADE: any;
			public static readonly FEATHER: any;
			public static readonly FIBERS: any;
			public static readonly FILL: any;
			public static readonly FILL_FLASH: any;
			public static readonly FILM_GRAIN: any;
			public static readonly FILTER: any;
			public static readonly FIND_EDGES: any;
			public static readonly FLATTEN_IMAGE: any;
			public static readonly FLIP: any;
			public static readonly FRAGMENT: any;
			public static readonly FRESCO: any;
			public static readonly GAUSSIAN_BLUR: any;
			public static readonly GET: any;
			public static readonly GLASS: any;
			public static readonly GLOWING_EDGES: any;
			public static readonly GRADIENT: any;
			public static readonly GRADIENT_MAP: any;
			public static readonly GRAIN: any;
			public static readonly GRAPHIC_PEN: any;
			public static readonly GROUP: any;
			public static readonly GROW: any;
			public static readonly HALFTONE_SCREEN: any;
			public static readonly HIDE: any;
			public static readonly HIGH_PASS: any;
			public static readonly HSBHSL: any;
			public static readonly HUE_SATURATION: any;
			public static readonly IMAGE_SIZE: any;
			public static readonly IMPORT: any;
			public static readonly INK_OUTLINES: any;
			public static readonly INTERSECT: any;
			public static readonly INTERSECT_WITH: any;
			public static readonly INVERSE: any;
			public static readonly INVERT: any;
			public static readonly LENS_FLARE: any;
			public static readonly LEVELS: any;
			public static readonly LIGHTING_EFFECTS: any;
			public static readonly LINK: any;
			public static readonly MAKE: any;
			public static readonly MAXIMUM: any;
			public static readonly MEDIAN: any;
			public static readonly MERGE_LAYERS: any;
			public static readonly MERGE_LAYERS_OLD: any;
			public static readonly MERGE_SPOT_CHANNEL: any;
			public static readonly MERGE_VISIBLE: any;
			public static readonly MEZZOTINT: any;
			public static readonly MINIMUM: any;
			public static readonly MOSAIC: any;
			public static readonly MOSAIC_PLUGIN: any;
			public static readonly MOTION_BLUR: any;
			public static readonly MOVE: any;
			public static readonly NEON_GLOW: any;
			public static readonly NEXT: any;
			public static readonly NOTE_PAPER: any;
			public static readonly NOTIFY: any;
			public static readonly NTSCCOLORS: any;
			public static readonly OCEAN_RIPPLE: any;
			public static readonly OFFSET: any;
			public static readonly OPEN: any;
			public static readonly OPEN_UNTITLED: any;
			public static readonly PAINT: any;
			public static readonly PAINT_DAUBS: any;
			public static readonly PALETTE_KNIFE: any;
			public static readonly PASTE: any;
			public static readonly PASTE_EFFECTS: any;
			public static readonly PASTE_INTO: any;
			public static readonly PASTE_OUTSIDE: any;
			public static readonly PATCHWORK: any;
			public static readonly PHOTOCOPY: any;
			public static readonly PINCH: any;
			public static readonly PLACE: any;
			public static readonly PLASTER: any;
			public static readonly PLASTIC_WRAP: any;
			public static readonly PLAY: any;
			public static readonly POINTILLIZE: any;
			public static readonly POLAR: any;
			public static readonly POSTER_EDGES: any;
			public static readonly POSTERIZE: any;
			public static readonly PREVIOUS: any;
			public static readonly PRINT: any;
			public static readonly PROFILE_TO_PROFILE: any;
			public static readonly PURGE: any;
			public static readonly QUIT: any;
			public static readonly RADIAL_BLUR: any;
			public static readonly RASTERIZE: any;
			public static readonly RASTERIZE_TYPE_SHEET: any;
			public static readonly REMOVE_BLACK_MATTE: any;
			public static readonly REMOVE_LAYER_MASK: any;
			public static readonly REMOVE_WHITE_MATTE: any;
			public static readonly RENAME: any;
			public static readonly REPLACE_COLOR: any;
			public static readonly RESET: any;
			public static readonly RETICULATION: any;
			public static readonly REVERT: any;
			public static readonly RIPPLE: any;
			public static readonly ROTATE: any;
			public static readonly ROUGH_PASTELS: any;
			public static readonly SAVE: any;
			public static readonly SELECT: any;
			public static readonly SELECTIVE_COLOR: any;
			public static readonly SET: any;
			public static readonly SHARPEN: any;
			public static readonly SHARPEN_EDGES: any;
			public static readonly SHARPEN_MORE: any;
			public static readonly SHEAR: any;
			public static readonly SHOW: any;
			public static readonly SIMILAR: any;
			public static readonly SMART_BLUR: any;
			public static readonly SMOOTH: any;
			public static readonly SMUDGE_STICK: any;
			public static readonly SOLARIZE: any;
			public static readonly SPATTER: any;
			public static readonly SPHERIZE: any;
			public static readonly SPLIT_CHANNELS: any;
			public static readonly SPONGE: any;
			public static readonly SPRAYED_STROKES: any;
			public static readonly STAINED_GLASS: any;
			public static readonly STAMP: any;
			public static readonly STOP: any;
			public static readonly STROKE: any;
			public static readonly SUBTRACT: any;
			public static readonly SUBTRACT_FROM: any;
			public static readonly SUMIE: any;
			public static readonly TAKE_MERGED_SNAPSHOT: any;
			public static readonly TAKE_SNAPSHOT: any;
			public static readonly TEXTURE_FILL: any;
			public static readonly TEXTURIZER: any;
			public static readonly THRESHOLD: any;
			public static readonly TILES: any;
			public static readonly TORN_EDGES: any;
			public static readonly TRACE_CONTOUR: any;
			public static readonly TRANSFORM: any;
			public static readonly TRAP: any;
			public static readonly TWIRL: any;
			public static readonly UNDERPAINTING: any;
			public static readonly UNDO: any;
			public static readonly UNGROUP: any;
			public static readonly UNLINK: any;
			public static readonly UNSHARP_MASK: any;
			public static readonly VARIATIONS: any;
			public static readonly WAIT: any;
			public static readonly WATER_PAPER: any;
			public static readonly WATERCOLOR: any;
			public static readonly WAVE: any;
			public static readonly WIND: any;
			public static readonly ZIG_ZAG: any;
		}
	}
}
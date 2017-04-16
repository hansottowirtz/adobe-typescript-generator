/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * To extend the node-handling behavior of Adobe Bridge, you 
		 * must implement these properties and methods to define you 
		 * own node type and handler. See Adobe Bridge JavaScript Guide 
		 * and Adobe Bridge JavaScript Reference for complete details. 
		 * Register a script-defined extension handler with  
		 * app.registerExtension(). You can access the global list of 
		 * all registered extensions through app.extensions.Your 
		 * node-handling extension defines a node type. Your node types 
		 * are identified by a Bridge URI prefix. You must associates 
		 * your handler with at least one prefix, using 
		 * app.registerPrefix().
		 */
		class ExtensionHandler extends Adobe.Csawlib.CSHostObject {
			/**
			 * Implement a function that  acquires actual file data for a 
			 * set of placeholder nodes.
			 */
			public acquirePhysicalFiles: any;
			/**
			 * Implement a function that duplicates a set of nodes that are 
			 * handled by this handler.
			 */
			public duplicate: any;
			/**
			 * Implement a function that converts a path string to a 
			 * canonical Bridge URI.
			 */
			public getBridgeUriForPath: any;
			/**
			 * Implement a function that executes an extension-defined 
			 * search among Adobe Bridge nodes of an extension-defined node 
			 * type.
			 */
			public getBridgeUriForSearch: any;
			/**
			 * Implement a function that retrieves existing sidecar files 
			 * for a set of nodes.
			 */
			public getSidecars: any;
			/**
			 * A collection of Infoset objects defining node data managed 
			 * by this handler.
			 */
			public readonly infosets: any[];
			/**
			 * Implement a function that creates a model instance that 
			 * implements node handling.
			 */
			public makeModel: any;
			/**
			 * New methods that are defined on Thumbnail objects that are 
			 * managed by this handler.
			 */
			public methods: any;
			/**
			 * Implement a function that deletes a set of nodes, marking 
			 * the associated files for deletion on disc by moving them to 
			 * the system trash or recycle bin.
			 */
			public moveToTrash: any;
			/**
			 * The unique identifying name of this node-handling extension.
			 */
			public readonly name: string;
			/** A collection of lexical prefix strings for Bridge URIs. */
			public readonly prefixes: any[];
			/**
			 * Implement a function that sets the rotation setting in 
			 * metadata for a set of thumbnails to the same value for all. 
			 * Does not rotate image bits.
			 */
			public rotate: any;
			/**
			 * Implement a function that sets the labels for a set of 
			 * thumbnails.
			 */
			public setLabels: any;
			/**
			 * Implement a function that sets the ratings for a set of 
			 * thumbnails.
			 */
			public setRatings: any;
			/**
			 * Implement a function that embeds XMP file metadata packets 
			 * in a set of files.
			 */
			public setXmp: any;
			public constructor();
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}
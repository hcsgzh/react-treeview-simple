# react-treeview-simple
tree view for React

## Overall
When I deal with hierarchical data, I want a treeview to show the data. This treeview component will allow you to rerender the nodes on the tree. It could go with whatever UI library. For example, Material-UI or Bootstrap.

## installation

```
npm install --save react-treeview-simple
```

## build and test

In the root folder of the component, you can build it using the script below.

```
npm install
npm run build
```


In the ./examples/cra folder, you can test it using the scripts below.

```
npm install ../..
npm dedupe  // clean up node_modules folder
npm start
```

To avoid the error, Invalid hook call. Hooks can only be called inside of the body, The `npm dedupe` will clean up the node_modules folder and aviod the error.

https://github.com/facebook/create-react-app/issues/7676



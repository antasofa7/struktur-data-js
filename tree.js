function createNodes(key) {
    const children = [];
    return {
        key,
        children,

        addChild(childKey) {
            const childNode = createNodes(childKey);
            children.push(childNode);
            return childNode;
        }
    }
}

function createTree(rootKey) {
    const root = createNodes(rootKey);
    return {
        root,
        print() {
            let result = '';
            function trasvers(node, visitFn, depth) {
                visitFn(node, depth);

                if(node.children.length) {
                    node.children.forEach(function(child) {
                        trasvers(child, visitFn, depth + 1);
                    });
                }
            }

            function addKeyToResult(node, depth) {
                result += result.length === 0 ? node.key : `\n${'-'.repeat(depth * 3)}${node.key}`;
            }

            trasvers(root, addKeyToResult, 1);
            return result;
        }
    }
}

const dom = createTree('html');
const head = dom.root.addChild('head');
const title = head.addChild('title');

const body = dom.root.addChild('body');
const header = body.addChild('header');
const main = body.addChild('main');
const footer = body.addChild('footer');

const h1 = header.addChild('h1');
const p = main.addChild('p');
const copyright = footer.addChild('Copyright 2022');

console.log(dom.print());
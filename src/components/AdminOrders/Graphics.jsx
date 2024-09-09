import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Graphics = ({ orders }) => {
  const allOrders = orders.data;
  let productsCount = {};

  allOrders.forEach((order) => {
    // Iterar sobre los productos en cada orden
    order.products.forEach((product) => {
      const { name, quantity } = product;

      // Verificar si el producto ya está en el objeto
      if (productsCount[name]) {
        productsCount[name] += quantity; // Sumar la cantidad si ya existe
      } else {
        productsCount[name] = quantity; // Crear la clave si no existe
      }
    });
  });

  // Obtener los labels (nombres de los productos)
  const labels = Object.keys(productsCount);

  // Obtener los datos (cantidades de los productos)
  const data = Object.values(productsCount);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Cantidad vendida",
        data: data,
        backgroundColor: "rgba(238, 39, 55, 0.4)",
        borderColor: "rgba(238, 39, 55)",
        borderWidth: 2,
        barThickness: 30,
      },
    ],
  };

  // Opciones para el gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "VENTAS MENSUALES",
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};
export default Graphics;

Graphics.propTypes = {
  orders: PropTypes.object.isRequired,
};
